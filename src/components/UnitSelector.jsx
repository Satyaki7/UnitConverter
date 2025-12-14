import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function UnitSelector({ units, value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[90%]">
        <SelectValue className="w-[90%]" placeholder="Unit" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(units).map(([key, u]) => (
          <SelectItem key={key} value={key}>
            {u.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}