import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: 1,
    addresses: [
        {
            id: 1,
            address: "pedexah1@dakcans.com",
            messages: [
                {
                    id: 1,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 2,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 3,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 4,
                    isReaded: true,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 5,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 6,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 7,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 8,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 9,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 10,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 11,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 12,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
            ],
        },
        {
            id: 2,
            address: "pedexah2@dakcans.com",
            messages: [
                {
                    id: 1,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 2,
                    isReaded: false,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
                {
                    id: 3,
                    isReaded: true,
                    from: "Coursea",
                    theme: "Verify Your E-mail",
                    content: `<div>
                            <p>
                                Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
                            </p>
                            <div>
                                <a>
                                    Verify This E-mail
                                </a>
                            </div>
                        </div>`,
                    time: "16:21",
                    date: "May, 24",
                },
            ],
        },
        // {
        //     id: 3,
        //     address: "pedexah3@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 4,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 5,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 6,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 7,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 8,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 9,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 10,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 11,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 12,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
        // {
        //     id: 13,
        //     address: "pedexah754@dakcans.com",
        //     messages: [
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: false,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //         {
        //             isReaded: true,
        //             from: "Coursea",
        //             theme: "Verify Your E-mail",
        //             content: `<div>
        //                     <p>
        //                         Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail. Please tap the link below to verify your e-mail.
        //                     </p>
        //                     <div>
        //                         <a>
        //                             Verify This E-mail
        //                         </a>
        //                     </div>
        //                 </div>`,
        //             time: "16:21",
        //             date: "May, 24",
        //         },
        //     ],
        // },
    ],
};

const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers: {
        setCurrentAddress(state, action) {
            state.current = action.payload;
        },
        deleteMessage({ addresses }, { payload }) {
            console.log(payload);
            addresses = addresses.map((address) => {
                if (address.id === payload.addressId) {
                    return (address.messages = address.messages.filter((message) => message.id !== payload.messageId));
                }
                return address;
            });
        },
    },
});

export const { setCurrentAddress, deleteMessage } = mailSlice.actions;
export default mailSlice.reducer;
