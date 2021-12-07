import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import SearchBar from "."

describe("<SearchBar />", () => {
  it("should render correctly", () => {
    render(<SearchBar />)

    expect(screen.getByRole("textbox", { name: /buscar/i })).toBeInTheDocument()
  })
})
