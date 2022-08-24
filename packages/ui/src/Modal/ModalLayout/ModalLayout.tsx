import React from 'react';
import styled from '@emotion/styled';

type ModalLayoutSize = 'md' | 'sm';

export type ModalLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalLayoutSize;
  fullScreen?: boolean;
  scrollableContent?: boolean;
};

type StyledModalLayoutProps = {
  $size?: ModalLayoutSize;
  $fullScreen?: boolean;
  $scrollableContent?: boolean;
};

const SIZE_MAP: Record<ModalLayoutSize, string> = {
  md: 'width: 600px;',
  sm: 'width: 464px;',
};

const getWidth = ({ $size = 'sm', $fullScreen }: StyledModalLayoutProps) => {
  if ($fullScreen) return 'width: 100%;';
  if ($size) return SIZE_MAP[$size];
  return '';
};

const getHeight = ({ $fullScreen }: StyledModalLayoutProps) => {
  if ($fullScreen) return 'height: 100%;';

  return 'max-height: calc(100% - 64px);';
};

const getMargin = ({ $fullScreen }: StyledModalLayoutProps) => {
  if ($fullScreen) return '';

  return 'margin: 40px;';
};

const getBoxStyles = ({ $fullScreen }: StyledModalLayoutProps) => {
  if ($fullScreen) return '';

  return `
    box-shadow: 0 8px 12px 0 #1111111f;
    border-radius: 8px;
  `;
};

const StyledWrap = styled.div<StyledModalLayoutProps>`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;

  ${getWidth}
  ${getHeight}
  ${getMargin}
  ${getBoxStyles}
`;

const StyledModalLayoutContent = styled.div<StyledModalLayoutProps>`
  width: 100%;
  pointer-events: auto;
  outline: 0;
  flex-grow: 1;
  overflow: hidden;
  ${({ $scrollableContent }) => $scrollableContent && 'overflow-y: auto;'};
`;

const StyledModalLayoutHeader = styled.div`
  flex: 0 0 auto;
`;

const StyledModalLayoutFooter = styled.div`
  flex: 0 0 auto;
`;

const ModalLayout = ({
  children,
  header,
  footer,
  size,
  fullScreen,
  scrollableContent,
}: ModalLayoutProps) => {
  return (
    <StyledWrap $size={size} $fullScreen={fullScreen}>
      {header && <StyledModalLayoutHeader>{header}</StyledModalLayoutHeader>}
      <StyledModalLayoutContent $scrollableContent={scrollableContent}>
        {children}
      </StyledModalLayoutContent>
      {footer && <StyledModalLayoutFooter>{footer}</StyledModalLayoutFooter>}
    </StyledWrap>
  );
};

export default ModalLayout;