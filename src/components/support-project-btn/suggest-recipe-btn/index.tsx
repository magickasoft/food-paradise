'use client'

import { memo, useState, useRef, useEffect } from 'react'
import { StyledButton, ModalOverlay, ModalContent, CloseButton, QRContainer, QRLink } from './styles'
import Image from 'next/image'

export const SupportProjectButton = memo(function SupportProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.focus()
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isModalOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <StyledButton onClick={openModal} title={'Поддержать проект'} aria-label={'Поддержать проект'}>
        {'Поддержать проект'}
      </StyledButton>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent
            ref={modalRef}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <CloseButton aria-label="Закрыть" onClick={closeModal}>
              &times;
            </CloseButton>
            <h2 id="modal-title">Поддержать проект</h2>
            <QRContainer>
              {isImageLoading && <div>Загрузка QR кода...</div>}
              <Image
                onLoad={() => setIsImageLoading(false)}
                src="/static/qr-sber.jpg"
                alt="QR код для перевода в Сбербанк"
                width={300}
                height={300}
                priority
              />
            </QRContainer>
            <QRLink>
              <a
                href="https://www.sberbank.com/sms/pbpn?requisiteNumber=79537647035"
                target="_blank"
                rel="noopener noreferrer"
              >
                Или перейдите по ссылке для поддержки
              </a>
            </QRLink>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
})
