export enum UserRoleEnum {
  'admin' = 'admin',
  'user' = 'user',
  'ghost' = 'ghost',
}

export type UserRoleType = keyof typeof UserRoleEnum;
