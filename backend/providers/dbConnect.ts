import oracledb from 'oracledb';
import  dotenv from 'dotenv'
dotenv.config();

class databaseConnection {
  private config: oracledb.ConnectionAttributes = {
    user: process.env.ORC_USER,
    password: process.env.ORC_PASSWORD,
    connectString: `${process.env.ORC_HOST}:${process.env.ORC_PORT}/${process.env.ORC_SERV}`,
  };

  public async connect(): Promise<oracledb.Connection> {
    try {
      const connection = await oracledb.getConnection(this.config);
      console.log('Conexão estabelecida com sucesso!');
      return connection;
    } catch (error) {
      console.error('Erro ao estabelecer conexão:', error.message);
      throw error;
    }
  }

  public async execute(sql: string): Promise<any> {
    try {
      const connection = await this.connect();
      const result = await connection.execute(sql);
      return result;
    } catch (error) {
      console.error('A consulta retornou o erro: ', error.message);
      throw error;
    }
  }
}

export default databaseConnection;