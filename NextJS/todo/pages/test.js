
async function fun1() {

    console.log('a');
    
    console.log('b');
    
    const t = await new Promise(() => {setTimeout(() => console.log('c'), 1000)}).then();
    
    const tt = await new Promise(() => {setTimeout(() => console.log('d'), 0)});
    
    console.log('e');
    
    }
    
    fun1();