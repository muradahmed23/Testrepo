# Test Repository - .NET 8 + Angular Integration

This repository demonstrates a full-stack web application using .NET 8 as the backend API and Angular as the frontend. The project structure follows best practices for separation of concerns and easy development.

## Project Structure

```
/
├── README.md                          # This file
├── Backend/                           # .NET 8 Web API
│   └── TestRepoAPI/                   # API project
│       ├── Program.cs                 # Main API configuration
│       ├── TestRepoAPI.csproj        # Project file
│       └── Properties/               # Project properties
└── Frontend/                         # Angular application
    └── TestRepoApp/                  # Angular project
        ├── src/                      # Source code
        ├── angular.json              # Angular configuration
        ├── package.json              # Dependencies
        └── tsconfig.json             # TypeScript configuration
```

## Prerequisites

Before running this project, ensure you have the following installed:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (v18 or later)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## Getting Started

### Backend (.NET 8 Web API)

1. Navigate to the backend directory:
   ```bash
   cd Backend/TestRepoAPI
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Build the project:
   ```bash
   dotnet build
   ```

4. Run the API:
   ```bash
   dotnet run
   ```

The API will be available at:
- HTTPS: `https://localhost:7155`
- HTTP: `http://localhost:5131`

#### API Endpoints

The backend provides the following REST endpoints:

- `GET /api/hello` - Returns a simple hello message with timestamp
- `GET /api/users` - Returns a list of sample users
- `GET /api/users/{id}` - Returns a specific user by ID
- `GET /weatherforecast` - Returns sample weather forecast data
- `GET /swagger` - API documentation (available in development)

### Frontend (Angular)

1. Navigate to the frontend directory:
   ```bash
   cd Frontend/TestRepoApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

The Angular application will be available at `http://localhost:4200`

## Development

### Running Both Projects Simultaneously

For full-stack development, you'll want to run both the backend and frontend:

1. **Terminal 1** - Start the .NET API:
   ```bash
   cd Backend/TestRepoAPI
   dotnet run
   ```

2. **Terminal 2** - Start the Angular dev server:
   ```bash
   cd Frontend/TestRepoApp
   ng serve
   ```

The Angular app will automatically proxy API requests to the .NET backend running on `https://localhost:7155`.

### Key Features Demonstrated

1. **CORS Configuration**: The .NET API is configured to allow requests from the Angular dev server
2. **HTTP Client Integration**: Angular service (`ApiService`) for consuming REST endpoints
3. **Responsive UI**: Angular components with CSS Grid for displaying API data
4. **Error Handling**: Proper error handling in both frontend and backend
5. **TypeScript Interfaces**: Strongly typed models for API responses

### Project Configuration

#### Backend Configuration

- **CORS Policy**: Configured to allow requests from `http://localhost:4200` (Angular dev server)
- **Swagger/OpenAPI**: Enabled in development for API documentation
- **Minimal APIs**: Uses .NET 8's minimal API approach for simple endpoint definitions

#### Frontend Configuration

- **HttpClient**: Configured for making API requests
- **Services**: `ApiService` handles all backend communication
- **Components**: Modular components for displaying different types of data
- **Routing**: Basic routing setup for future expansion

## Building for Production

### Backend

```bash
cd Backend/TestRepoAPI
dotnet publish -c Release -o ./publish
```

### Frontend

```bash
cd Frontend/TestRepoApp
npm run build
```

The built files will be in `Frontend/TestRepoApp/dist/TestRepoApp/`

## Testing

### Backend Tests

```bash
cd Backend/TestRepoAPI
dotnet test
```

### Frontend Tests

```bash
cd Frontend/TestRepoApp
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both backend and frontend
5. Submit a pull request

## License

This project is for demonstration purposes.