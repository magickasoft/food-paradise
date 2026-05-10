'use client'

import styled from 'styled-components'

const ScrollBlock = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 4px 0 14px;
  max-width: 100%;
  align-items: stretch;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition: background 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`

export const RecipesScroll = ({ children }: { children: React.ReactNode }) => {
  return <ScrollBlock>{children}</ScrollBlock>
}
