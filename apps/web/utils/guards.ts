import { useLayoutEffect, useEffect } from "react";

export const isDefined = (value: any): boolean =>
  typeof value !== null && typeof value !== undefined;

export const isEmptyString = (str: string): boolean => str.trim().length === 0;

export function isNil(arg: any): boolean {
  return arg === null || arg === undefined;
}

export const exists = !isNil;

export function isString(arg: any): arg is string {
  return typeof arg === "string";
}

export const isValidNumber = (value: any): boolean =>
  isDefined(value) && Number.isFinite(+value);

// check if we're in a browser or server environment
export const isBrowser = typeof window !== `undefined`;

// use the correct effect
export const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect;
