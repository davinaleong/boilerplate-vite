console.log(`app.ts loaded.`)

/// Variables

/// Functions
function main() {
  logFunction(`main`)
  // Logic goes here
}

function logFunction(name: string, params?: Object): void {
  console.log(`fn ${name}(${JSON.stringify(params)})`)
}

/// Execution
main()
