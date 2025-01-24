const assert = require('assert')
const anchor = require('@coral-xyz/anchor')
const {SystemProgram} = anchor.web3

describe('mycalculatorapp', () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider)
  const calculator = anchor.web3.Keypair.generate()

  //console.log(generate)

  const program = anchor.workspace.Mycalculatordapp

  it('Creates a calculator', async() => {
    await program.rpc.create("Welcome to Solana", {
      accounts: {
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      },
      signers: [calculator]
    })

    const account = await program.account.calculator.fetch(calculator.publicKey)
    assert.ok(account.greeting === "Welcome to Solana")
  })


  it('Adds two numbers', async() => {
    await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
      accounts: {
        calculator: calculator.publicKey
      }
    })
    const account = await program.account.calculator.fetch(calculator.publicKey)
    assert.ok(account.result.eq(new anchor.BN(5)))
  })


  it('Substract two numbers', async() => {
    await program.rpc.substract(new anchor.BN(2), new anchor.BN(3), {
      accounts: {
        calculator: calculator.publicKey
      }
    })
    const account = await program.account.calculator.fetch(calculator.publicKey)
    assert.ok(account.result.eq(new anchor.BN(-1)))
  })


  it('Multiplact two numbers', async() => {
    await program.rpc.multiply(new anchor.BN(2), new anchor.BN(3), {
      accounts: {
        calculator: calculator.publicKey
      }
    })
    const account = await program.account.calculator.fetch(calculator.publicKey)
    assert.ok(account.result.eq(new anchor.BN(6)))
  })




  it('Division two numbers', async() => {
    await program.rpc.divide(new anchor.BN(4), new anchor.BN(2), {
      accounts: {
        calculator: calculator.publicKey
      }
    })

    const account = await program.account.calculator.fetch(calculator.publicKey)
    assert.ok(account.result.eq(new anchor.BN(2)))
  })
})
