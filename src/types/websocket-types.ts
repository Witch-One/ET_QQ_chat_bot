// websocket建立成功回包
export interface wssResData {
  op: number; // opcode wss的类型
  d?: {
    // 事件内容
    heartbeat_interval?: number; // 心跳时间间隔
  };
  s: number; // 心跳的唯一标识
  t: string; // 事件类型
}

// 发送心跳入参
export interface HeartbeatParam {
  op: number;
  d: number;
}

// 事件分发类型
export interface EventTypes {
  eventType: string;
  eventMsg?: object;
}

// 心跳参数
export enum OpCode {
  DISPATCH = 0, // 服务端进行消息推送
  HEARTBEAT = 1, // 客户端发送心跳
  IDENTIFY = 2, // 鉴权
  RESUME = 6, // 恢复连接
  RECONNECT = 7, // 服务端通知客户端重连
  INVALID_SESSION = 9, // 当identify或resume的时候，如果参数有错，服务端会返回该消息
  HELLO = 10, // 当客户端与网关建立ws连接之后，网关下发的第一条消息
  HEARTBEAT_ACK = 11, // 当发送心跳成功之后，就会收到该消息
}

// wss回包数据

// OpenAPI传过来的事件类型
export enum WsEventType {
  EVENT_GUILD_CREATE = 'GUILD_CREATE', // 频道创建
  EVENT_GUILD_UPDATE = 'GUILD_UPDATE', // 频道更新
  EVENT_GUILD_DELETE = 'GUILD_DELETE', // 频道删除
  EVENT_CHANNEL_CREATE = 'CHANNEL_CREATE', // 子频道创建
  EVENT_CHANNEL_UPDATE = 'CHANNEL_UPDATE', // 子频道更新
  EVENT_CHANNEL_DELETE = 'CHANNEL_DELETE', // 子频道删除
  EVENT_GUILD_MEMBER_ADD = 'GUILD_MEMBER_ADD', // 频道成员加入
  EVENT_GUILD_MEMBER_UPDATE = 'GUILD_MEMBER_UPDATE', // 频道成员更新
  EVENT_GUILD_MEMBER_REMOVE = 'GUILD_MEMBER_REMOVE', // 频道成员移除
  EVENT_MESSAGE_CREATE = 'MESSAGE_CREATE', // 消息创建
  EVENT_AT_MESSAGE_CREATE = 'AT_MESSAGE_CREATE', // 机器人被@时触发
  EVENT_AUDIO_START = 'AUDIO_START', // 音频开始播放
  EVENT_AUDIO_FINISH = 'AUDIO_FINISH', // 音频结束播放
  EVENT_AUDIO_ON_MIC = 'AUDIO_ON_MIC', // 机器人上麦
  EVENT_AUDIO_OFF_MIC = 'AUDIO_OFF_MIC', // 机器人下麦
}

export const WSCodes = {
  1000: 'WS_CLOSE_REQUESTED',
  4004: 'TOKEN_INVALID',
  4010: 'SHARDING_INVALID',
  4011: 'SHARDING_REQUIRED',
  4013: 'INVALID_INTENTS',
  4014: 'DISALLOWED_INTENTS',
};

// websocket错误码
export const enum WebsocketCode {
  INVALID_OPCODE = 4001, // 无效的opcode
  INVALID_PAYLOAD = 4002, // 无效的payload
  ERROR_SEQ = 4007, // seq错误
  TOO_FAST_PAYLOAD = 4008, // 发送 payload 过快，请重新连接，并遵守连接后返回的频控信息
  EXPIRED = 4009, // 连接过期，请重连
  INVALID_SHARD = 4010, // 无效的shard
  TOO_MACH_GUILD = 4011, // 连接需要处理的guild过多，请进行合理分片
  INVALID_VERSION = 4012, // 无效的version
  INVALID_INTENTS = 4013, // 无效的intent
  DISALLOWED_INTENTS = 4014, // intent无权限
  ERROR = 4900, // 内部错误，请重连
}

// intents
export const Intents = {
  GUILDS: 0,
  GUILD_MEMBERS: 1,
  GUILD_BANS: 2,
  GUILD_EMOJIS: 3,
  GUILD_INTEGRATIONS: 4,
  GUILD_WEBHOOKS: 5,
  GUILD_INVITES: 6,
  GUILD_VOICE_STATES: 7,
  GUILD_PRESENCES: 8,
  GUILD_MESSAGES: 9,
  GUILD_MESSAGE_REACTIONS: 10,
  GUILD_MESSAGE_TYPING: 11,
  DIRECT_MESSAGES: 12,
  DIRECT_MESSAGE_REACTIONS: 13,
  DIRECT_MESSAGE_TYPING: 14,
};

export const IntentEvents = [
  [
    // 0
    'GUILD_CREATE',
    'GUILD_UPDATE',
    'GUILD_DELETE',
    'GUILD_ROLE_CREATE',
    'GUILD_ROLE_UPDATE',
    'GUILD_ROLE_DELETE',
    'CHANNEL_CREATE',
    'CHANNEL_UPDATE',
    'CHANNEL_DELETE',
    'CHANNEL_PINS_UPDATE',
  ],
  [
    // 1
    'GUILD_MEMBER_ADD',
    'GUILD_MEMBER_UPDATE',
    'GUILD_MEMBER_REMOVE',
  ],
  [
    // 2
    'GUILD_BAN_ADD',
    'GUILD_BAN_REMOVE',
  ],
  [
    // 3
    'GUILD_EMOJIS_UPDATE',
  ],
  [
    // 4
    'GUILD_INTEGRATIONS_UPDATE',
    'INTEGRATION_CREATE',
    'INTEGRATION_UPDATE',
    'INTEGRATION_DELETE',
  ],
  [
    // 5
    'WEBHOOKS_UPDATE',
  ],
  [
    // 6
    'INVITE_CREATE',
    'INVITE_DELETE',
  ],
  [
    // 7
    'VOICE_STATE_UPDATE',
  ],
  [
    // 8
    'PRESENCE_UPDATE',
  ],
  [
    // 9
    'MESSAGE_CREATE',
    'MESSAGE_UPDATE',
    'MESSAGE_DELETE',
    'MESSAGE_DELETE_BULK',
  ],
  [
    // 10
    'MESSAGE_REACTION_ADD',
    'MESSAGE_REACTION_REMOVE',
    'MESSAGE_REACTION_REMOVE_ALL',
    'MESSAGE_REACTION_REMOVE_EMOJI',
  ],
  [
    // 11
    'TYPING_START',
  ],
  [
    // 12
    'MESSAGE_CREATE',
    'MESSAGE_UPDATE',
    'MESSAGE_DELETE',
    'CHANNEL_PINS_UPDATE',
  ],
  [
    // 13
    'MESSAGE_REACTION_ADD',
    'MESSAGE_REACTION_REMOVE',
    'MESSAGE_REACTION_REMOVE_ALL',
    'MESSAGE_REACTION_REMOVE_EMOJI',
  ],
  [
    // 14
    'TYPING_START',
  ],
];

// Session事件
export const SessionEvents = {
  DEBUG: 'DEBUG',
  CLOSED: 'CLOSED',
  PACKET: 'PACKET',
  READY: 'READY', // 鉴权已通过
  INVALID_SESSION: 'INVALID_SESSION',
  DISCONNECT: 'DISCONNECT', // 断线
};
