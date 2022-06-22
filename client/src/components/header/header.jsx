import React from 'react';
import { ContentWrapper } from '../content-wrapper';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
        <ContentWrapper className={styles.content}>
            <h1 className={styles.title}>{ `Моя Библиотека` }</h1>
            <p className={styles.desc}>{`Сборник книг на любой вкус\n для любителей фентезийных миров`}</p>
        </ContentWrapper>
        {/*<img src={ WaveImage } alt="" className={ styles.wave }/>*/}
    </div>
  )
}
