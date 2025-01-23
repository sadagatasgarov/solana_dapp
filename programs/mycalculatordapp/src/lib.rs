use anchor_lang::prelude::*;

declare_id!("Foc5ecG5hHTeapmBvQn9GibQmRYLFTTMH6iZFF6XDuRV");

#[program]
pub mod mycalculatordapp {
    use anchor_lang::solana_program::entrypoint::ProgramResult;

    use super::*;

    pub fn create(ctx: Context<Create>, init_message: String) -> ProgramResult {
        let calculator = &mut ctx.accounts.calculator;
        calculator.greeting = init_message;
        Ok(())
    }
}

