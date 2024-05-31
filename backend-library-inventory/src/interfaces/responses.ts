export type StatusHTTP = 'ok' | 'created' | 'notFound' | 'badRequest' | 'unauthorized' |
'conflict' | 'internalError' | 'noContent' | 'unprocessableEntity';

export type ServiceResponse<type> = Promise<{
  status: StatusHTTP,
  data: type | { message: string }
}>;