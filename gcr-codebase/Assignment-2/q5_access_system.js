// Q5. Boolean Logic Access System

function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Secure only if: alarm on, door locked AND window closed, owner inside
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  // Using ! as well for the unsafe check (same result, shown for clarity)
  const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm: ${isAlarmOn}, Owner inside: ${isOwnerInside} -> ` +
    (isSecure && !isUnsafe ? "Secure" : "Unsafe")
  );
}

// Test multiple outcomes
checkAccess(true, true, true, true);   // Secure
checkAccess(false, true, true, true);  // Unsafe (door unlocked)
checkAccess(true, false, true, true);  // Unsafe (window open)
checkAccess(true, true, false, true);  // Unsafe (alarm off)
checkAccess(true, true, true, false);  // Unsafe (owner not inside)
