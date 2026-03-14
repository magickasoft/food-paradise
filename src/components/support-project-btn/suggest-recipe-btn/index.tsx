'use client'

import { memo, useState } from 'react'
import { StyledButton, ModalOverlay, ModalContent, CloseButton, QRContainer } from './styles'

export const SupportProjectButton = memo(function SupportProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <StyledButton onClick={openModal} title={'Поддержать проект'} aria-label={'Поддержать проект'}>
        {'Поддержать проект'}
      </StyledButton>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>Поддержать проект</h2>
            <QRContainer>
              <div>
                {/* Здесь будет QR код */}
                QR код
              </div>
            </QRContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
})
