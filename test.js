

const a1 = ["#f7f7ff", "#4449f5", "#4251b1", "#4850f5", "#5878a2", "#6588f8", "#376a7a", "#509fa8", "#377975", "#509fa8", "#3b7c5f", "#51a6ad", "#725138", "#4a5b61", "#1cd85e", "#298861", "#0d6524", "#276c3c", "#f9f9ff", "#4549f5", "#4051a7", "#4850f5", "#577796", "#6488f8", "#3c5586", "#509fa8", "#376590", "#509fa8", "#2b7587", "#51a6ad", "#725138", "#484c77", "#1cd85e", "#2f6e84", "#0d6524", "#1e6568", "#1e6568", "#4449f5", "#40529e", "#4850f5", "#55758b", "#6588f8", "#532e5d", "#509fa8", "#66365b", "#509fa8", "#77485a", "#51a2aa", "#725138", "#592a56", "#1cd85e", "#623b55", "#0d6524", "#633e48", "#fcfcfc", "#050512", "#394a89", "#050612", "#4c6876", "#070a12", "#294d5f", "#060c0d", "#2a6059", "#060c0d", "#2e603a", "#060d0d", "#0a0705", "#294d5f", "#021107", "#296159", "#010803", "#275433", "#fafafa", "#050512", "#34437d", "#050612", "#445e6c", "#070a12", "#2f3a6a", "#060c0d", "#294a74", "#060c0d", "#1d5868", "#060d0d", "#0a0705", "#313a68", "#021107", "#284b72", "#010803", "#184c59", "#f2f2f3", "#050512", "#303f76", "#050612", "#415966", "#070a12", "#401f45", "#060c0d", "#4f2643", "#060c0d", "#5d3241", "#060d0d", "#0a0705", "#5d3241", "#021107", "#4e2742", "#010803", "#4f2c37", ] 


const element = document.getElementById("smile");


for (let i = 0; i < a1.length; i += 2 ){
    let para = document.createElement("p");
    let node = document.createTextNode("QWERTYU:  " + (i/2+1) );
    
    para.appendChild(node);
    console.log(i)
    para.style.color = a1[i]
    para.style.background = a1[i+1]

    element.appendChild(para)

    let para1 = document.createElement("p");
    let node1 = document.createTextNode("QWERTYU:  " + (i/2+1) + " R" );
    para1.appendChild(node1)

    para1.style.color = a1[i+1]
    para1.style.background= a1[i]

    element.appendChild(para1)

}


