/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */
// https://tauri.app/v1/api/js/dialog/

function getMachineId() {
  const tauri = window.__TAURI__;
  const invoke = tauri.tauri.invoke;
  return invoke("get_machine_id");
}
