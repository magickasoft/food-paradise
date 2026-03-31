'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 16px;
`

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

const Stars = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
`

const Star = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    font-size: 22px;
    color: ${({ active }) => (active ? '#FFA500' : '#E0E0E0')};
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #ffb84d;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  background: #f7f7f7;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 14px;
  font-size: 14px;
  color: #333;
  resize: none;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9b9b9b;
  }

  &:focus {
    background: #fff;
    border-color: #e0e0e0;
  }
`

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`

const CharCounter = styled.div`
  font-size: 12px;
  color: #9b9b9b;
`

const SubmitButton = styled.button`
  background-color: #ff6f61;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #ff8a7a;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const HiddenInput = styled.input`
  display: none;
`

// 🔥 Toast
const Toast = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ visible }) => (visible ? '0' : '20px')});

  background: #1c1c1c;
  color: #fff;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 10px;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;

  transition: all 0.3s ease;
  z-index: 1000;
`

const CommentSection: React.FC<{ recipe: string }> = ({ recipe }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState<number | null>(null)
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')
  const maxChars = 300

  // ⏱ авто-скрытие сообщения через 5 сек
  useEffect(() => {
    if (!message) return

    const timer = setTimeout(() => {
      setMessage('')
    }, 5000)

    return () => clearTimeout(timer)
  }, [message])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setRating(0)
    setComment('')
    setMessage('Спасибо за ваш отзыв.')
  }

  return (
    <Container>
      <Title>Оцените рецепт</Title>

      <Card>
        <Stars>
          {[1, 2, 3, 4, 5].map(star => (
            <Star
              key={star}
              active={star <= (hover ?? rating)}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
            >
              <FaStar />
            </Star>
          ))}
        </Stars>

        <Form onSubmit={handleSubmit}>
          <HiddenInput type="hidden" name="recipe" value={recipe} />

          <Textarea
            value={comment}
            onChange={e => setComment(e.target.value.slice(0, maxChars))}
            placeholder="Ваш комментарий поможет нам сделать рецепт лучше!"
          />

          <BottomRow>
            <CharCounter>Осталось {maxChars - comment.length}</CharCounter>

            {/* <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Отправка...' : 'Отправить'}
            </SubmitButton> */}

            <SubmitButton type="submit">Отправить</SubmitButton>
          </BottomRow>
        </Form>
      </Card>

      {/* 🔥 Toast */}
      <Toast visible={!!message}>{message}</Toast>
    </Container>
  )
}

export default CommentSection
