import { Languages } from "lucide-react"

export function LanguageToggle() {
  const handleLanguageToggle = () => {
    const currentPath = window.location.pathname

    const newPath = currentPath.includes("/en")
      ? currentPath.replace("/en", "/it")
      : currentPath.replace("/it", "/en")

    window.location.href = newPath
  }

  return <Languages className="cursor-pointer" onClick={handleLanguageToggle} />
}
