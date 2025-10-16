'use client'

import React from 'react'
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

interface CommentsListProps {
  list: string[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`

const Title = styled.h4`
  font-size: 26px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 24px;
  text-align: center;
`

const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 16px 20px;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f2f2;
  }
`

const Avatar = styled(FaUserCircle)`
  color: #ff6f61;
  font-size: 32px;
  flex-shrink: 0;
`

const CommentText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-wrap;
`

const EmptyState = styled.div`
  font-size: 16px;
  color: #777;
  background: #fafafa;
  border-radius: 10px;
  padding: 20px 30px;
  text-align: center;
`

const CommentsList: React.FC<CommentsListProps> = ({ list }) => {
  return (
    <Container>
      <Title>Комментарии</Title>

      {list.length > 0 ? (
        list.map((comment, i) => (
          <CommentItem key={i}>
            <Avatar />
            <CommentText>{comment}</CommentText>
          </CommentItem>
        ))
      ) : (
        <EmptyState>Пока нет комментариев — будьте первым!</EmptyState>
      )}
    </Container>
  )
}

export default CommentsList
