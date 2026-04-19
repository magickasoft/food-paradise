'use client'

import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { Recipe } from '@/constants/recipes/recipes'

interface CommentsListProps {
  list?: Recipe['comments']
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`

const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 16px;
`

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

const CommentItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Name = styled.span`
  font-weight: 600;
  color: #1c1c1c;
`

const Stars = styled.div`
  display: flex;
  gap: 2px;
`

const CommentText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 6px 0 0;
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

      {list && list.length > 0 ? (
        <Card>
          {list.map(comment => (
            <CommentItem key={comment.id}>
              {comment.avatar ? <Avatar src={comment.avatar} alt={comment.name} /> : null}

              <Content>
                <Header>
                  <Name>{comment.name}</Name>

                  <Stars>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} color={i < comment.rating ? '#FFA500' : '#E0E0E0'} />
                    ))}
                  </Stars>
                </Header>

                <CommentText>{comment.text}</CommentText>
              </Content>
            </CommentItem>
          ))}
        </Card>
      ) : (
        <EmptyState>Пока нет комментариев — будьте первым!</EmptyState>
      )}
    </Container>
  )
}

export default CommentsList
