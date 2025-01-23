use anchor_lang::prelude::*;

declare_id!("Foc5ecG5hHTeapmBvQn9GibQmRYLFTTMH6iZFF6XDuRV");

#[program]
pub mod mycalculatordapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
