import { StatusHTTP } from '../interfaces/responses';

function mapStatusHTTP(status: StatusHTTP): number {
  const statusHTTP = {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    unprocessableEntity: 422,
    internalError: 500,
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
  };
  return statusHTTP[status] ?? 500;
}

export default mapStatusHTTP;
