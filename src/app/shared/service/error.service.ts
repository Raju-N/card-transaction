export class AppError {
  constructor(private error?: any) {}
}

export class NotFoundError extends AppError {}
