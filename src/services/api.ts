import axios, { AxiosResponse } from 'axios';

import { NameList } from 'components/namesTable';

interface ApiResponse{
  code: string,
  message: string,
  names?: NameList[]
}

class Api{
  private api = axios.create({
    baseURL: 'http://localhost:8000'
  });

  private errorResponse: AxiosResponse<ApiResponse> = {data: { code: 'error', message: 'error' }, config: {}, headers: '', status: 400, statusText: '', request: ''};

  public async getNameTable(name?: string): Promise<AxiosResponse<ApiResponse>>{
    return await this.api.get(`/show?name=${name}`)
    .then((result: AxiosResponse<ApiResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }

  public async createName(name: string): Promise<AxiosResponse<ApiResponse>>{
    return await this.api.post('/create', {
      name
    })
    .then((result: AxiosResponse<ApiResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }

  public async updateName(name: string, code: number): Promise<AxiosResponse<ApiResponse>>{
    return await this.api.patch('/update', {
      name,
      code
    })
    .then((result: AxiosResponse<ApiResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }

  public async deleteName(code: number): Promise<AxiosResponse<ApiResponse>>{
    return await this.api.delete(`/delete?code=${code}`)
    .then((result: AxiosResponse<ApiResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }
}

export default new Api();