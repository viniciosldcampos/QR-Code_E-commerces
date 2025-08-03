import prompt from 'prompt';
import mainprompt from './prompts/prompt-main.js';

async function main() {
    prompt.get(mainprompt, async(err, choose) => {
        if(choose.select == 1) console.log("Escolheu o QRCode");
        if(choose.select == 2) console.log("Escolheu o Password");
    });
    prompt.start();
}

main()