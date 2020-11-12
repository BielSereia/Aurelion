/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import { Client, Message } from 'discord.js';

interface commandInterface {
  config: {
    name: String;
  }
}

export default class CommandStructure {
  client: Client;

  config: {
    name: String;
  };

  message: Message;

  args: string[];

  constructor(client: Client, options: commandInterface) {
    this.client = client;

    this.config = {
      name: options.config.name,
    };
  }

  getMessage(): Message {
    return this.message;
  }

  setMessage(message: Message): void {
    this.message = message;
  }

  getArgs(): string[] {
    return this.args;
  }

  setArgs(args: string[]): void {
    this.args = args;
  }
}
