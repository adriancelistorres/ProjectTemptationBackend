export interface IAsistencia {
  idasistencia: number;
  iddocente: number;
  observacion: string;
  fh_asistencia: string;
  estado: number;
  qr: string;
  porcod: string;
}

export interface IAsisReq{
  iddocente: number|undefined;
  observacion: string|undefined;

}
