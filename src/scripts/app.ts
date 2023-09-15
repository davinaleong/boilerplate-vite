console.log(`app.ts loaded.`)

/// Variables

/// Functions
function main() {
  logFunction(`main`)

  // Logic goes here
}

function logFunction(name: string, params: any = {}): void {
  console.log(`fn ${name}(${JSON.stringify(params)})`)
}

/// Execute
document.addEventListener(`DOMContentLoaded`, main)
