import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@benable/ui';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { useLink } from 'solito/link';

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  });

  return (
    <YStack f={1} jc="center" ai="center" p="$tw-4.5" space bc="white">
      <YStack space="$tw-4.5" maw={600}>
        <H1 ta="center" col="$purple">
          Welcome to Tamagui.
        </H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  );
}

function SheetDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const toast = useToastController();

  return (
    <>
      <Button
        // size="$6"
        size="$tw-16"
        scaleIcon={1.7}
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="quick"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="quick" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            // size="$6"
            size="$tw-16"
            scaleIcon={1.7}
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false);
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
                duration: 2000,
              });
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
