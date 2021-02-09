import axios, { AxiosResponse } from 'axios';

import { NameList } from 'components/namesTable';

interface ApiResponse{
  code: string,
  message: string,
}

interface NameResponse extends ApiResponse{
  names: NameList[]
}

class Api{
  api = axios.create({
    baseURL: 'http://localhost:8000'
  });

  errorResponse: AxiosResponse<ApiResponse> = {data: { code: 'error', message: 'client error' }, config: {}, headers: '', status: 400, statusText: '', request: ''};

  public async getNameTable(name?: string): Promise<AxiosResponse<ApiResponse> | void>{
    return await this.api.get('/show', {
      data: {
        name
      }
    })
    .then((result: AxiosResponse<NameResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }

  public async createName(name: string){
    return await this.api.post('/create', {
      name
    })
    .then((result: AxiosResponse<NameResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }

  public async updateName(name: string, code: number){
    return await this.api.patch('/update', {
      name,
      code
    })
    .then((result: AxiosResponse<NameResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }

  public async deleteName(code: number){
    return await this.api.delete('/delete', {
      data:
        code
    })
    .then((result: AxiosResponse<NameResponse>) => {
      return result;
    })
    .catch((err: any) => {
      console.log(err);
      return this.errorResponse;
    });
  }
}

export default new Api();