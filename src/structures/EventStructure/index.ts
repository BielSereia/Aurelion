/* eslint-disable linebreak-style */

import { Client } from 'discord.js';

export default class EventStructure {
  client: Client;

  events: Array<String>;

  constructor(client: Client, events: string[]) {
    this.client = client;
    this.events = events;
  }
}
