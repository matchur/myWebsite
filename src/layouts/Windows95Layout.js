import React from 'react';
import DesktopIcon from '../components/windows/DesktopIcon';
import Taskbar from '../components/windows/Taskbar';
import Window from '../components/windows/Window';

function Windows95Layout({
  windows,
  desktopWindows,
  orderedWindows,
  onOpenWindow,
  onFocusWindow,
  onCloseWindow,
  onMinimizeWindow,
  onToggleWindow,
  renderWindowContent,
}) {
  return (
    <div className="desktop95">
      <aside className="desktop95__icons">
        {desktopWindows.map((windowItem) => (
          <DesktopIcon key={windowItem.id} label={windowItem.title} onOpen={() => onOpenWindow(windowItem.id)} />
        ))}
      </aside>

      <main className="desktop95__workspace">
        {orderedWindows
          .filter((windowItem) => windowItem.open && !windowItem.minimized)
          .map((windowItem) => (
            <Window
              key={windowItem.id}
              title={windowItem.title}
              zIndex={windowItem.zIndex}
              isFocused={windowItem.zIndex === orderedWindows[orderedWindows.length - 1]?.zIndex}
              onFocus={() => onFocusWindow(windowItem.id)}
              onClose={() => onCloseWindow(windowItem.id)}
              onMinimize={() => onMinimizeWindow(windowItem.id)}
            >
              {renderWindowContent(windowItem)}
            </Window>
          ))}
      </main>

      <Taskbar windows={windows} onToggleWindow={onToggleWindow} />
    </div>
  );
}

export default Windows95Layout;
