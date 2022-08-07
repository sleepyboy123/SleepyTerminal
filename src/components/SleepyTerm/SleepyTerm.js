import React, {useState} from 'react';
import Terminal from 'react-console-emulator'

import commands from './commands'

export default function SleepyTerm() {

    const owrs = commands.overwrites
    const cmds = commands.commands
    const terminal = React.createRef()
    // eslint-disable-next-line no-unused-vars
    const [prompt, setPrompt] = useState('you@sleepyterm:$ ')

    async function fetchCat() {
        let response  = await fetch("https://api.thecatapi.com/v1/images/search")
        let jsonResponse = await response.json()
        return jsonResponse[0];
    }

    return (
        <Terminal 
        ref={terminal}
        welcomeMessage={[
            `                                                              `,
            `  ####  #      ###### ###### #####  #   # #####   #####  #   # `,
            ` #      #      #      #      #    #  # #  #    # #     #  # #  `,
            `  ####  #      #####  #####  #    #   #   #####  #     #   #   `,
            `      # #      #      #      #####    #   #    # #     #   #   `,
            ` #    # #      #      #      #        #   #    # #     #   #   `,
            `  ####  ###### ###### ###### #        #   #####   #####    #   `,
            `                                                              `,
            "Welcome to the sleepyterminal!",
            "This is a terminal style website made with React.",
            "Type 'help' to see a list of commands.",
            " "
        ]}
        commands={{
            clear: {
                description: 'Clears the terminal',
                usage: 'clear',
                fn: () => {
                    terminal.current.clearStdout()
                }
            },
            help: {
                description: 'List all available commands',
                usage: 'help',
                fn: () => {
                    return `
                        ${Object.keys(owrs).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${owrs[cmd].description}${" ".repeat(39-owrs[cmd].description.length)} | ${owrs[cmd].usage}`).join('\n')}
                        ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${cmds[cmd].description}${" ".repeat(39-cmds[cmd].description.length)} | ${cmds[cmd].usage}`).join('\n')}
                    `
                }
            },
            cat: {
                description: 'Get a random cute cat~',
                usage: 'cat',
                fn: async () => {
                    const {url, width, height} = await fetchCat()
                    terminal.current.pushToStdout("kitnapping a cat...")
                    terminal.current.pushToStdout(<img src={url} width={width < 600 ? width : 600} height={height < 480 ? width : 480} alt='cat'></img>)
                }
            },
            ...cmds
        }}
        promptLabel={prompt} 
        autoFocus
        style={{
            backgroundColor:null,
            minHeight: null,
            maxHeight: null,
            overflow: 'auto',
            height: '100%',
            width: '100%',     
        }}
        styleEchoBack='fullInherit'
        contentStyle={{ color: '#ffb86c' , fontWeight: 'normal', paddingLeft: null}} // Text colour
        promptLabelStyle={{ color: '#98c379' , fontWeight:'normal'}} // Prompt label colour
        inputTextStyle={{ color: '#fefefe' , fontWeight: 'normal'}}
        messageStyle={{ color: '#b1e1ff' , fontWeight: 'normal', paddingLeft: null}}
        scrollBehavior='auto'
        noDefaults
        />
    )
}