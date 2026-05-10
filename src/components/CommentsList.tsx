'use client'

import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { Recipe } from '@/constants/recipes/recipes'
import { maxDevice } from '@/styles/device'

interface CommentsListProps {
  list?: Recipe['comments']
}

const Container = styled.div`
  width: 100%;
  margin-top: 18px;
`

const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${maxDevice.laptop} {
    padding: 0 4px;
  }
`

const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`

const CommentItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 18px;
  border-radius: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #f3ece4;
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
  line-height: 1.6;
  color: #5f554d;
  margin: 8px 0 0;
`

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 15px;
  color: #7c6958;
  background: #fffaf5;
  border-radius: 20px;
  padding: 28px;
  text-align: center;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.12);

  svg {
    width: 22px;
    height: 22px;
    color: #ff8402;
  }
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
        <EmptyState>
          <FiMessageCircle />
          <span>Пока нет комментариев — будьте первым!</span>
        </EmptyState>
      )}
    </Container>
  )
}

export default CommentsList
