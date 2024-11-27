import * as React from "react"

interface ToastOptions {
  description?: string
  title?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toast, setToast] = React.useState<ToastOptions | null>(null)

  const showToast = React.useCallback((options: ToastOptions) => {
    setToast(options)
    
    // Automatically clear the toast after 3 seconds
    setTimeout(() => {
      setToast(null)
    }, 3000)
  }, [])

  return { 
    toast, 
    showToast 
  }
}
