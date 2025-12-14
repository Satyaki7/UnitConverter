import { useEffect, useState } from "react"
import { CONVERSIONS } from "@/lib/conversion-data"
import { TypeSelector } from "@/components/TypeSelector"
import { UnitSelector } from "@/components/UnitSelector"
import { Input } from "@/components/ui/input"
import { Drawer, DrawerContent } from "./ui/drawer"
import { Button } from "./ui/button"

export default function UnitConverter() {
  const [type, setType] = useState(null)
  const [fromUnit, setFromUnit] = useState(null)
  const [toUnit, setToUnit] = useState(null)
  const [fromValue, setFromValue] = useState("")
  const [toValue, setToValue] = useState("")
  const [history, setHistory] = useState([])


  const units = type ? CONVERSIONS[type].units : {}


  useEffect(() => {
  if (!type) return

  const unitKeys = Object.keys(CONVERSIONS[type].units)

  if (unitKeys.length < 2) return

  // pick random distinct units
  const from = unitKeys[Math.floor(Math.random() * unitKeys.length)]
  let to = from

  while (to === from) {
    to = unitKeys[Math.floor(Math.random() * unitKeys.length)]
  }

  setFromUnit(from)
  setToUnit(to)

  // reset values
  setFromValue("")
  setToValue("")
}, [type])


useEffect(() => {
  if (
    !type ||
    !fromUnit ||
    !toUnit ||
    fromValue === "" ||
    !units[fromUnit] ||
    !units[toUnit]
  )
    return

  const base = Number(fromValue) / units[fromUnit].factor
  const result = base * units[toUnit].factor

  setToValue(result.toString())

  setHistory((prev) => [
    {
      type,
      fromValue,
      fromUnit,
      toValue: result,
      toUnit,
      timestamp: Date.now(),
    },
    ...prev,
  ])
}, [fromValue, fromUnit, toUnit, type, units])
  
  
  const [open, setOpen] = useState(false)





  return (
    <div className="w-full p-4 rounded-2xl bg-transparent backdrop-blur-xl border-amber-50 border shadow-amber-50 flex flex-col gap-4 justify-center">
      <div className="flex flex-row justify-between">
      <TypeSelector value={type} onChange={setType} />

        <Button onClick={() => setOpen(true)}>
          History
          <span class="material-symbols-outlined">
history
</span>
</Button>

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerContent>
  <div className="p-4 max-h-[70vh] overflow-y-auto">
    <h2 className="text-lg font-semibold mb-4">
      Conversion History
    </h2>

    {history.length === 0 && (
      <p className="text-sm text-muted-foreground">
        No conversions yet
      </p>
    )}

    <ul className="space-y-3">
      {history.map((item, index) => (
        <li
          key={item.timestamp + index}
          className="p-3 rounded-lg bg-amber-100 text-sm"
        >
          <div className="font-medium capitalize">
            {item.type}
          </div>

          <div>
            {item.fromValue} {item.fromUnit} →{" "}
            {item.toValue.toFixed(4)} {item.toUnit}
          </div>
        </li>
      ))}
    </ul>
  </div>
</DrawerContent>

</Drawer>

      </div>
          {type && (
      <div className="w-full grid grid-cols-[60%_40%] gap-3">
        <input
          className="w-full h-16 rounded-md p-4 bg-amber-50 text-2xl font-bold"
          type="number"
          placeholder="Enter a value"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />
        <UnitSelector
          units={units}
          value={fromUnit ?? undefined}
          onChange={setFromUnit}
        />
      </div>
    )}

    {type && (
      <div className="w-full grid grid-cols-[60%_40%] gap-3">
        <input
          className="w-full h-18 rounded-md p-4 bg-amber-50 text-2xl font-bold"
          type="number"
          placeholder="Output"
          value={toValue}
          disabled = {true}
        />
        <UnitSelector
          units={units}
          value={toUnit ?? undefined}
          onChange={setToUnit}
        />
      </div>
    )}
    </div>
  )
}