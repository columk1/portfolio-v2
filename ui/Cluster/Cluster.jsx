'use client'

import * as d3 from 'd3'
import { useEffect } from 'react'
import './Cluster.css'

export default function Cluster() {
  const width = 400
  const height = 400
  const center = { x: width / 2, y: height / 2 }
  let groups = []
  let nodes
  let circles
  let simulation

  const params = {
    groupsNumber: 5,
    decay: 0.25,
    strength: 0.03,
    isGrouped: true,
    restart: restart,
    toggle: toggle,
  }

  useEffect(() => {
    const svg = d3.select('.cluster-container svg').attr('viewBox', `0 0 ${width} ${height}`)
    restart()

    // Event listener for the SVG click
    svg.on('click', toggle)

    // Cleanup function to remove event listeners if necessary
    return () => {
      svg.on('click', null)
    }
  }, [])

  function restart() {
    params.isGrouped = false
    createSimulation()
    groupGroups()
  }

  function toggle() {
    event.stopPropagation()
    if (params.isGrouped) {
      groupGroups()
    } else {
      splitGroups()
    }
    params.isGrouped = !params.isGrouped
  }

  function createSimulation() {
    nodes = Array.from({ length: 75 + Math.floor(Math.random() * 100) }, () => ({
      radius: 4,
      value: Math.random(),
      x: Math.random() * width,
      y: Math.random() * height,
    }))

    d3.select('.cluster-container svg').selectAll('circle').remove()

    circles = d3
      .select('.cluster-container svg')
      .selectAll('.bubble')
      .data(nodes, (d) => d)
      .enter()
      .append('circle')
      .attr('r', 0)
      .attr('fill', (d) => `hsl(${(160 + d.value * 300) % 360}, 70%, 55%)`)

    circles
      .transition()
      .duration(500)
      .attr('r', (d) => d.radius)

    if (simulation) {
      simulation.stop()
    }
    simulation = d3
      .forceSimulation()
      .force('x', d3.forceX().strength(params.strength).x(center.x))
      .force('y', d3.forceY().strength(params.strength).y(center.y))
      .force('charge', d3.forceManyBody().strength(-1))
      .on('tick', () => {
        circles.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
      })
      .nodes(nodes)
      .alpha(1)
      .restart()
      .stop()
  }

  function groupGroups() {
    simulation
      .force('x', d3.forceX().strength(params.strength).x(center.x))
      .force('y', d3.forceY().strength(params.strength).y(center.y))
      .velocityDecay(0.23)
      .alpha(6)
      .restart()
  }

  function splitGroups() {
    if (params.groupsNumber > 2) {
      const randomWidths = Array.from({ length: params.groupsNumber }, () => Math.random())
      const totalWidth = randomWidths.reduce((sum, width) => sum + width, 0)
      const normalizedWidths = randomWidths.map((width) => width / totalWidth)
      let cumulative = 0
      groups = normalizedWidths.map((w) => {
        cumulative += w
        return cumulative - w / 2
      })
    } else {
      groups[0] = 0.1 * (Math.random() - 0.5)
      groups[1] = groups[0] + 0.5
    }

    const randomDist = Array.from(
      { length: params.groupsNumber },
      () => 0.15 + 0.15 * Math.random()
    )
    groups = groups.map((angle, idx) => ({
      angle,
      x: randomDist[idx] * width * Math.cos(Math.PI * 2 * angle) + center.x,
      y: randomDist[idx] * height * Math.sin(Math.PI * 2 * angle) + center.y,
    }))

    const closestGroup = (v) => {
      let closestGroup = groups[0]
      let smallestDifference = Math.abs(v - closestGroup.angle)
      for (let i = 1; i < groups.length; i++) {
        const difference = Math.abs(v - groups[i].angle)
        if (difference < smallestDifference) {
          smallestDifference = difference
          closestGroup = groups[i]
        }
      }
      return closestGroup
    }

    simulation
      .force(
        'x',
        d3
          .forceX()
          .strength(params.strength)
          .x((d) => closestGroup(d.value).x)
      )
      .force(
        'y',
        d3
          .forceY()
          .strength(params.strength)
          .y((d) => closestGroup(d.value).y)
      )
      .alpha(5)
      .velocityDecay(0.24)
      .restart()
  }

  return (
    <button
      type='button'
      aria-label='Toggle cluster animation'
      onClick={toggle}
      className='cluster-button'
    >
      <div className='cluster-container'>
        <svg />
      </div>
    </button>
  )
}
