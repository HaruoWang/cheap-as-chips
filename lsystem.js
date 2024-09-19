new p5((p) => {
  
    let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let axiom = ["F", "+", "F", "+", "F", "+", "F", "+"];
    let rule = ["F", "F", "F", "F", "F", "+", "F", "+", "F", "+", "F", "+", "F", "F", "F", "+", "F", "F", "+", "+", "F", "F", "+", "F"];
    let angle = 90;
    let len = 5.5;
    let out; 
  
    for (let i = 0; i < axiom.length; i++) {
      genA = rule.map( function(a) {
        
        if(a == "F") return rule;
        if(a == "+") return "+"; 
        
      })
      genB = axiom.map( function(a) {
        
        if(a == "F") return genA;
        if(a == "+") return "+"; 
        
      })
    };
    fin = genB.join('')

    p.preload = async () => {
      out = p.loadImage("out.png");
    }
  
	p.setup = async () => {
		p.createCanvas(512, 512);
		p.angleMode(p.DEGREES);
        p.background(0);

		await chip();
		await ccl();
      
	}

	let chip = async () => {
      
        p.translate(80, p.height-80);
        p.stroke(255);
        p.strokeWeight(1.5);
      
        for (let i = 0; i < fin.length; i++) {
          let current = fin[i];

          if (current == "F") {
            p.line(0, 0, 0, -len);
            p.translate(0, -len);
            await sleep(1);
          } else if (current == "+") {
            p.rotate(angle);
          } else if (current == "-") {
            p.rotate(-angle)
          } else if (current == "[") {
            p.push();
          } else if (current == "]") {
            p.pop();
          }
        }
      
		await sleep(1000);
      
	}

	let ccl = async () => {
      
		p.line(112, -112, 112, -192);
        p.line(112, -192, 84, -224);
        p.line(84, -224, 24, -224);
      
	}
})