import {ShardingManager} from 'discord.js';
import path from 'path';

const manager = new ShardingManager(path.join(__dirname, 'bot.ts'), )

manager.on('shardCreate', (Shard) => console.log(`[Shard] Shard #${Shard.id} Create`))

manager.spawn()