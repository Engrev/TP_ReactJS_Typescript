import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <main>
                <Header />
                <QueryClientProvider client={queryClient}>
                    <App/>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </main>
        </BrowserRouter>
    </React.StrictMode>,
)
