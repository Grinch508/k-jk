'use client'
import React from "react"
import styles from '@/app/create-todo/page.module.css'
export default function Input(props) {
    return (
        <>
            {props.type === 'title' ? <input
                                        className={styles.createInput}
                                        type='text'
                                        value={props.value}
                                        onChange={props.onChange}
                                    /> :
                                    <textarea
                                        className={styles.textarea}
                                        type='text'
                                        value={props.value}
                                        onChange={props.onChange}
                                    />
            }
        </>
    )
}