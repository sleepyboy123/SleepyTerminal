export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        whoami: {
            description: 'Who am i?',
            usage: 'whoami',
            fn: () => {
                return "Who am i?\n 1) Cyber Security Engineer\n 2) Software Developer Hobbyist\n"
            }
        },
        instagram: {
            description: 'Opens my instagram page',
            usage: 'instagram',
            fn: () => {
                window.open('https://www.instagram.com/sleepyboy123/', '_blank')
                return "opening instagram..."
            }
        },
        linkedin: {
            description: 'Opens my linkedin page',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/matthew-tan-5a5b66195/', '_blank')
                return "opening linkedin..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/sleepyboy123', '_blank')
                return "opening github account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.
                    -------------------------------
                    python           - 60%
                    reactjs          - 60%
                    mysql            - 60%
                    mongodb          - 60%
                    php              - 40%
                    java             - 40%
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.
                    ----------------------------
                    procrastination  - 100%
                    overthinking     - 100%
                    leadership       - 70%
                    social-skills    - 00%
                `
            }
        },
        projects: {
            description: 'Projects I have done.',
            usage: 'projects',
            fn: () => {
                let x = 1
                return `
                    these are the projects I have done.
                    -----------------------------------
                    sleepychat    https://sleepychat.netlify.app/
                    sleepytask    https://sleepytasks.netlify.app/
                    sleepytyper   https://sleepytyper.netlify.app/
                `
            }
        },
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}