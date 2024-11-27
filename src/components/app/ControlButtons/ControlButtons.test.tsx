import { screen, fireEvent, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { renderWithProviders } from "@/tests/customRender/customRender";
import { ControlButtons } from "./ControlButtons";

describe.skip("ControlButtons component", () => {
  const defaultProps = {
    entity: "Test Entity",
    isCreate: false,
    onCreate: vi.fn(),
    onUpdate: vi.fn(),
    onDelete: vi.fn(),
    isCreatePending: false,
    isUpdatePending: false,
    isDeletePending: false,
  };

  it("renders 'Create' button when isCreate is true", () => {
    renderWithProviders(<ControlButtons {...defaultProps} isCreate={true} />);

    const createButton = screen.getByText("Create");
    expect(createButton).toBeInTheDocument();
  });

  it("renders 'Update' and 'Delete' buttons when isCreate is false", () => {
    renderWithProviders(<ControlButtons {...defaultProps} isCreate={false} />);

    const updateButton = screen.getByRole("button", { name: "Update" });
    const deleteButton = screen.getByRole("button", { name: "Delete" });

    expect(updateButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it("displays loading state for 'Create' button when isCreatePending is true", () => {
    renderWithProviders(
      <ControlButtons
        {...defaultProps}
        isCreate={true}
        isCreatePending={true}
      />
    );

    const button = screen.getByRole("button", { name: "Create" });
    const loader = within(button).getByTestId("loading-spinner");

    expect(loader).toBeInTheDocument();
  });

  it("displays loading state for 'Update' button when isUpdatePending is true", () => {
    renderWithProviders(
      <ControlButtons
        {...defaultProps}
        isCreate={false}
        isUpdatePending={true}
      />
    );

    const button = screen.getByRole("button", { name: "Update" });
    const loader = within(button).getByTestId("loading-spinner");

    expect(loader).toBeInTheDocument();
  });

  it("displays modal after clicked 'Delete' button", async () => {
    renderWithProviders(<ControlButtons {...defaultProps} isCreate={false} />);

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(
      screen.getByText(`Delete ${defaultProps.entity}`)
    ).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    expect(cancelButton).toBeInTheDocument();

    const okButton = screen.getByRole("button", { name: "Ok" });
    expect(okButton).toBeInTheDocument();

    fireEvent.click(okButton);
    expect(defaultProps.onDelete).toHaveBeenCalled();
  });
});
