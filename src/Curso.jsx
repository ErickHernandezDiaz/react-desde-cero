import React from 'react'

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/original/d9a43cc5-9590-427b-b7b1-5855d9410221.png" alt="Poster del curso" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">Programación orientada a objetos con Go</h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg" alt="Profesor" />
                        </div>
                    </div>
                    <span className="small">Alvaro Felipe</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
        </div>
    </article>
)

export default Curso