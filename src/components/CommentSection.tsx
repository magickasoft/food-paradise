'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 32px;
`

const Stars = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`

const Star = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 42px;
  color: ${({ active }) => (active ? '#ff6f61' : '#c4c4c4')};
  transition: color 0.2s ease;

  &:hover {
    color: #ff8a7a;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 620px;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 140px;
  background: #f6f6f6;
  border: none;
  border-radius: 10px;
  padding: 16px;
  font-size: 18px;
  color: #333;
  resize: none;
  outline: none;
  margin-bottom: 8px;

  &::placeholder {
    color: #6b6b6b;
  }
`

const CharCounter = styled.div`
  align-self: flex-start;
  font-size: 12px;
  color: #6b6b6b;
  margin-bottom: 20px;
`

const SubmitButton = styled.button`
  background-color: #ff6f61;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 40px;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #ff6f61;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const Message = styled.div`
  margin-top: 16px;
  font-size: 18px;
  color: #ff6f61;
`

const CommentSection: React.FC = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState<number | null>(null)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const maxChars = 300

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, comment }),
      })

      const data = await res.json()
      if (data.success) {
        setMessage('Спасибо! Ваш отзыв успешно отправлен 💌')
        setRating(0)
        setComment('')
      } else {
        setMessage('Ошибка при отправке. Попробуйте позже.')
      }
    } catch (err) {
      setMessage('Ошибка при отправке. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title>Оцените рецепт</Title>
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
        <Textarea
          value={comment}
          onChange={e => setComment(e.target.value.slice(0, maxChars))}
          placeholder="Ваш комментарий поможет нам сделать рецепт лучше!"
        />
        <CharCounter>Осталось {maxChars - comment.length} символов</CharCounter>

        <SubmitButton type="submit" disabled={loading || rating === 0 || !comment.trim()}>
          {loading ? 'Отправка...' : 'Отправить'}
        </SubmitButton>

        {message && <Message>{message}</Message>}
      </Form>
    </Container>
  )
}

export default CommentSection
