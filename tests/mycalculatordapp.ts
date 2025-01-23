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
})
