export type StatusHTTP = 'ok' | 'notFound' | 'badRequest' | 'unauthorized';

export type ServiceResponse<type> = Promise<{
  status: StatusHTTP,
  data: type | { message: string }
}>;