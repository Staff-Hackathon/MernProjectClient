import { toast } from 'react-toastify'

export function showWarningAlert(message) {
  toast.warn(message)
}

export function showSuccessAlert(message) {
  toast.success(message)
}

export function showErrorAlert(message) {
  toast.error(message)
}

export function canVisit() {
  if (sessionStorage['fName'] == 'Shubham') {
    return true
  } else {
    return false
  }
}
